const Pagination = ({ onPageChange, currentPage, pageSize, totalRecords }) => {
  const maxPage = Math.ceil(totalRecords / pageSize)

  const onNextClick = () => {
    if (currentPage < maxPage) onPageChange(currentPage + 1)
  }

  const onPreviousClick = () => {
    if (currentPage > 0) onPageChange(currentPage - 1)
  }

  return (
    <div>
      <button onClick={onPreviousClick}>Previous</button>
      <div>{currentPage}</div>
      <button onClick={onNextClick}>Next</button>
    </div>
  )
}

export default Pagination
