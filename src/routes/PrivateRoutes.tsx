import Home from "@/Home"
import PrivateLayout from "@/layouts/PrivateLayout"

export default function PrivateRoutes() {
  return {
    path: "/",
    element: <PrivateLayout />,
    children: [
      { path: "", element: <Home /> }, //? Welcome Screen
    ],
  }
}
