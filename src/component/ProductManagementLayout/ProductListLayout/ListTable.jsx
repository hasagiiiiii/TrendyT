import React from 'react'

const ListTable = () => {
  return (
    <div className='product-list-table'>
            <table cellSpacing={0} cellPadding={0} border={0} className='shopee-table__header'>
              {/* <colgroup>
                <col width={40}/>
                <col width={232}/>
                <col width={606}/>
                <col width={96}/>
                <col width={80}/>
              </colgroup> */}
              <thead>
                <tr>
                  <th colSpan={1} rowSpan={1}><input type="checkbox" /></th>
                  <th colSpan={1} rowSpan={1}> Tên sản phẩm</th>
                  <th colSpan={1} rowSpan={1}> Phân loại</th>
                  <th colSpan={1} rowSpan={1}> Phân loại hàng</th>
                  <th colSpan={1} rowSpan={1}> Giá</th>
                  <th colSpan={1} rowSpan={1}> Kho hàng</th>
                  <th colSpan={1} rowSpan={1}> Doanh số</th>
                  <th colSpan={1} rowSpan={1}> Quảng cáo</th>
                  <th colSpan={1} rowSpan={1}> thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>tét</td>
                  <td>tét</td>
                  <td>tét</td>
                  <td>tét</td>
                  <td>tét</td>
                  <td>tét</td>
                  <td>tét</td>
                  <td>tét</td>
                </tr>
              </tbody>
            </table>
          </div>
  )
}

export default ListTable
