import { useEffect, useState } from "react"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { AppSidebar } from "@/components/navigation/app-sidebar"
import { Outlet } from 'react-router-dom';

export default function PrivateLayout() {
  const [loading, setLoading] = useState<boolean>(true)

  const [isSidebarOpen, setIsSidebarOpen] = useState<string | null>("true")
  useEffect(() => {
    document.addEventListener("storage", () => {
      setIsSidebarOpen(localStorage.getItem("sidebar"))
    })
    console.log("change", isSidebarOpen)
  }, [isSidebarOpen])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex border-b sticky top-0 bg-background h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 z-20">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="ml-4" />
            <Separator orientation="vertical" className="h-4 mr-2" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div
            className={`absolute top-4 right-4 transition-all duration-300 ease-in-out ${
              isSidebarOpen === "false" ? "scale-90 -translate-x-4 -translate-y-2" : ""
            }`}
          ></div>
        </header>
        {loading ? (
          <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
            <div className="grid gap-4 auto-rows-min md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        ) : (
          <div
            className={
              "absolute p-4 pt-0 overflow-y-auto top-16 w-full " +
              (isSidebarOpen === "false"
                ? "lg:w-[calc(100vw-1rem-var(--sidebar-width-icon))]"
                : "lg:w-[calc(100vw-1rem-var(--sidebar-width))]")
            }
          >
            <Outlet />
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  )
}
