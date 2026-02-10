import { createRouter, createWebHistory } from "vue-router"

import Home from "@/pages/Home.vue"
import Services from "@/pages/Services.vue"
import CaseStudies from "@/pages/CaseStudies.vue"
import EngagementModels from "@/pages/EngagementModels.vue"
import Contact from "@/pages/Contact.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/services", component: Services },
  { path: "/case-studies", component: CaseStudies },
  { path: "/engagement-models", component: EngagementModels },
  { path: "/contact", component: Contact },
  {path: "/about",name: "About",
  component: () => import("@/pages/About.vue"),
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

export default router
