import UseContext from "@/components/pages/UseContext"
import UseEffect from "@/components/pages/UseEffect"
import UseState from "@/components/pages/UseState"
import PrivateLayout from "@/layouts/PrivateLayout"

export default function PrivateRoutes() {
  return {
    path: "/",
    element: <PrivateLayout />,
    children: [
      { path: "use-state", element: <UseState /> }, //? Welcome Screen
      { path: "use-effect", element: <UseEffect /> }, //? Welcome Screen
      { path: "use-context", element: <UseContext /> }, //? Welcome Screen
    ],
  }
}
