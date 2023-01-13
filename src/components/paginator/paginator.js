import 'bootstrap-icons/font/bootstrap-icons.css';

export const Paginator = ({ setPageNumber, pageNumber }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          {pageNumber > 1 && (
            <a href="#" className="page-link" aria-label="Previous" onClick={() => setPageNumber(pageNumber--)}>
              <span aria-hidden="true">
                <i class="bi bi-chevron-compact-left"></i>
              </span>
            </a>
          )}
        </li>
        <li className="page-item">
          <a href="#" className="page-link" aria-label="Next" onClick={() => setPageNumber(pageNumber++)}>
            <span aria-hidden="true">
              <i class="bi bi-chevron-compact-right"></i>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
