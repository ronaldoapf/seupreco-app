import { Outlet } from 'react-router-dom'
import { AppSidebar } from './app-sidebar'
import { SidebarProvider, SidebarTrigger } from './ui/sidebar'

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-4">
        <header className="flex items-center justify-between">
          <SidebarTrigger />
        </header>
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
