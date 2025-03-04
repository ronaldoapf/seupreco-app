import Layout from '@/components/layout'
import { Establishments } from '@/pages/establishments'
import { Home } from '@/pages/home'
import { Products } from '@/pages/products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="establishments" element={<Establishments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
