import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import API from './api';
import { useAuth } from './AuthContext';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import Dashboard from './components/Dashboard';
import SearchFilter from './components/SearchFilter';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function TrackerPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await API.get('/');
      setJobs(res.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = async (formDataToSend) => {
    try {
      await API.post('/', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchJobs();
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  const updateJob = async (id, updatedData) => {
    try {
      await API.put(`/${id}`, updatedData);
      fetchJobs();
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const deleteJob = async (id) => {
    try {
      await API.delete(`/${id}`);
      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="dashboard-layout">
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="brand-icon">💼</span>
          <span className="brand-text">JobTracker</span>
        </div>
        <div className="user-info">
          <div className="user-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
          <span className="user-name">{user?.name}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="page-header">
          <h1>Welcome back, {user?.name?.split(' ')[0]} 👋</h1>
          <p>Here's an overview of your job applications</p>
        </div>

        <Dashboard jobs={jobs} />

        <div className="dashboard-grid">
          <div className="panel">
            <JobForm onAddJob={addJob} />
          </div>

          <div className="panel panel-wide">
            <div className="panel-header">
              <h2>📋 Your Applications</h2>
              <SearchFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
              />
            </div>

            {loading ? (
              <p className="loading-text">Loading jobs...</p>
            ) : (
              <JobList jobs={filteredJobs} onUpdate={updateJob} onDelete={deleteJob} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <TrackerPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;