import { CollectionDetailPage } from "@/features/collections/pages/CollectionDetail/CollectionDetailPage";
import { Dashboard } from "@/features/dashboard/pages/Dashboard";
import { HomePage } from "@/features/home/pages/HomePage";
import { ProfilePage } from "@/features/profile/pages/ProfilePage";
import { SnippetsPage } from "@/features/snippets/pages/SnippetsPage";
import { AppLayout } from "@/layouts/AppLayout";
import { HomeLayout } from "@/layouts/HomeLayout";

export const MainRoutes = [
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "app",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "snippets",
        element: <SnippetsPage />,
      },
      {
        path: "collections/:colId",
        element: <CollectionDetailPage />,
      },
      {
        path: "collections/:colId/:snipId",
        element: <CollectionDetailPage />,
      },
    ],
  },
];
