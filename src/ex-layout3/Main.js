import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 版面頁面元件
import Layout from './layouts/Layout'
// 其它子頁面
import Home from './pages/Home'
import NoFound from './pages/NoFound'
import Product from './pages/Product'
import Detail from './pages/Product/Detail'
import List from './pages/Product/List'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index代表此路由中的預設子頁 */}
          <Route index element={<Home />} />

          {/* 其它子頁面 */}
          {/* 注意Product頁面在 /product/index.js 裡，只是一個作layout用頁面*/}
          <Route path="product" element={<Product />}>
            {/* index代表此路由中的預設子頁 */}
            <Route index element={<List />} />
            {/* 代表此路由中的有id子頁，例`product/detail/?cat=a&color=1` */}
            <Route path="detail" element={<Detail />} />
          </Route>

          {/* 404未找到的頁面路由，需放在最下方 */}
          <Route path="*" element={<NoFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main
