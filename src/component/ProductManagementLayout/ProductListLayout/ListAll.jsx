import React from 'react'
import ListTable from './ListTable'

const ListAll = () => {
  return (
    <div className='list-panel'>
        <div className='list-all'>
          <div className='prodcut-list-header'>
            <div className='product-list-section'>
              <div className='title-box'>
                <div className='page-title'> 1 sản phẩm </div>
                <div className='percent-des'> Có thể đăng tải thêm 1000 sản phẩm <i class="bi bi-question-circle"></i></div>
              </div>
              <div className='action-box'>
                <button>Thêm sản phẩm mới</button>
              </div>
            </div>
          </div>
          <ListTable/>
        </div>
    </div>
  )
}

export default ListAll
