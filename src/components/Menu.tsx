import {
  IonContent,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";


import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Home, ShoppingBag, Info, Users, Heart, Settings, LogOut,ChevronRight,} from "lucide-react";

interface AppPage {
  title: string;
  url: string;
  icon: React.ElementType;
  description: string;
}

const appPages: AppPage[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    description: "Overview",
  },
  {
    title: "Product",
    url: "/product",
    icon: ShoppingBag,
    description: "Perfume collection",
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
    description: "Our story",
  },
  {
    title: "Developers",
    url: "/dev",
    icon: Users,
    description: "Meet the team",
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <IonMenu
      menuId="main-menu"
      contentId="main"
      type="overlay"
      className="[--width:300px] "
    >
      <IonContent
        scrollY={false}
        className="[--background:#fffafa]"
      >
        <div className="flex min-h-full flex-col">

          <div className="px-6 pb-6 pt-10">
            <div className="flex items-center gap-3">

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  bg-[#fbe3e5]
                "
              >
                <span className="text-xl font-semibold tracking-tight text-[#242424]">
                  ST
                </span>
              </div>
            
              <div>
                <h1 className="text-lg font-semibold tracking-wide text-[#242424]">
                  ScenTop
                </h1>

                <p className="mt-0.5 text-xs text-[#999999]">
                  Find your signature scent
                </p>
              </div>
            </div>
          </div>

          <div className="mx-6 h-px bg-[#eeeeee]" />

          <nav className="flex-1 px-4 py-6">
            <p
              className="
                mb-3 px-3
                text-[10px] font-semibold
                uppercase tracking-[0.2em]
                text-[#aaaaaa]
              "
            >
              Menu
            </p>

            <div className="space-y-2">
              {appPages.map((page) => {
                const Icon = page.icon;
                const active = location.pathname === page.url;

                return (
                  <IonMenuToggle
                    key={page.url}
                    autoHide
                  >
                    <div
                      onClick={() => navigate(page.url)}
                      className={`
                        group flex cursor-pointer
                        items-center rounded-2xl
                        px-3 py-3
                        transition-all duration-200

                        ${
                          active
                            ? "bg-[#fbe3e5] shadow-sm"
                            : "hover:bg-[#f8f8f8]"
                        }
                      `}
                    >
                      <div
                        className={`
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-xl
                          transition-colors

                          ${
                            active
                              ? "bg-white text-[#242424]"
                              : "bg-[#f6f6f6] text-[#555555]"
                          }
                        `}
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.7}
                        />
                      </div>

                      <div className="ml-3 min-w-0 flex-1">
                        <p className="text-sm font-medium text-[#292929]">
                          {page.title}
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#999999]">
                          {page.description}
                        </p>
                      </div>

                      <ChevronRight
                        size={16}
                        strokeWidth={1.5}
                        className={
                          active
                            ? "text-[#555555]"
                            : "text-[#cccccc]"
                        }
                      />
                    </div>
                  </IonMenuToggle>
                );
              })}
            </div>
          </nav>

          <div className="mx-4">
            <div
              className="
                flex items-center gap-3
                rounded-2xl
                bg-white px-4 py-4
                shadow-[0_4px_18px_rgba(0,0,0,0.06)]
              "
            >
              <Heart
                size={19}
                strokeWidth={1.7}
                className="text-[#e89a9f]"
              />

              <div className="flex-1">
                <p className="text-xs font-medium text-[#333333]">
                  Your favorites
                </p>

                <p className="mt-0.5 text-[10px] text-[#aaaaaa]">
                  View saved fragrances
                </p>
              </div>

              <ChevronRight
                size={15}
                className="text-[#bbbbbb]"
              />
            </div>
          </div>

          <div className="mt-6 border-t border-[#eeeeee] px-4 py-5">

          
          </div>

        </div>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;