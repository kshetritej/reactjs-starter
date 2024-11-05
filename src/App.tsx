import { AppSidebar } from './ui/sidebar/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@shadcn/ui/sidebar'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
