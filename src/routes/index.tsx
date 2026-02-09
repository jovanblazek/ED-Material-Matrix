import { createFileRoute } from "@tanstack/react-router"

import { MaterialMatrixPage } from "@/components/material-matrix-page"

export const Route = createFileRoute("/")({ component: MaterialMatrixPage })
