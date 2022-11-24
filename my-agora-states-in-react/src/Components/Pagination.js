export const Pagination = ({ total, limit, page, setPage }) => {
    const numPages = Math.ceil(total / limit);

    return (
        <section>
            <nav className="pagination-container">
            <button className="pagination-button" id="prev-button" title="Previous page" aria-label="Previous page"
                onClick={() => setPage(page - 1)} disabled={page === 1}>&lt;</button>
            {Array(numPages)
                .fill()
                .map((_, i) => (
                    <button id="pagination-numbers"
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        aria-current={page === i + 1 ? "page" : null}
                    >
                        {i + 1}
                    </button>
                ))}
            <button className="pagination-button" id="next-button" title="Next page" aria-label="Next page"
                onClick={() => setPage(page + 1)} disabled={page === numPages}>&gt;</button>
            </nav>
        </section>  
      );
}

