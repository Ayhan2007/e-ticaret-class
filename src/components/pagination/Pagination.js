//// home daki ürünleri sergilerken yada admin panelindeki tüm ürünleri gösterirken kullandığımız pagination burada oluşturulur.
import React, { useState } from 'react'
import styles from "./Pagination.module.scss"

const Pagination = ({curretnPage,setCurrentPage,productsPerPage,totalProducts}) => {

  const pageNumbers = []
  const totalPages = Math.ceil(totalProducts / productsPerPage)

  const pageNumberLimit = 5
  const [maxPageNumberLimit,setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit,setMinPageNumberLimit] = useState(0)
  return (


    
  )
}

export default Pagination