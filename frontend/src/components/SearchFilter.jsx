function SearchFilter({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="🔍 Search by company name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Selected">Selected</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}

export default SearchFilter;