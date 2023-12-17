"use client"

import { Menu, Transition } from '@headlessui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

const menuLinks = [
  { name: "Create event", link: "/events/create" },
  { name: "Your tickets", link: "/tickets"},
  { name: "Account", link: "/account" },
  { name: "Settings", link: "/account/settings" },
  { name: "Sign out", link: "" },
]

export default function NavbarDropdownMenu(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string | null>(null);
  const [tokens, setTokens] = useState<number>(0);

  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      const userId = (await supabase.auth.getUser()).data.user?.id;
      const { data, error } = await supabase.from('UserData').select().eq('id', userId);

      if(!error) {
        setUsername(data[0].username);
        setTokens(data[0].tokens);
      }
    }

    getUserData();

    setLoading(false);
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();

    router.refresh();
  }

  return (
    <div className="">
      <Menu as="div" className="relative w-full">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <p>{loading ? "Loading..." : username} <b className='font-semibold text-indigo-500'>{loading ? "" : `TK ${tokens}`}</b></p>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-600 rounded-md bg-zinc-950 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {menuLinks.map((menuLink) => {
                if(menuLink.link === '') 
                return <Menu.Item key={menuLink.link}>
                  {({ active }) => (
                    <button onClick={async () => await signOut()}
                      className={`${active ? 'bg-indigo-500 text-zinc-200' : 'text-zinc-200'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {menuLink.name}
                    </button>
                  )}
                </Menu.Item>
                

                return <Link href={menuLink.link} key={menuLink.link}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${active ? 'bg-indigo-500 text-zinc-200' : 'text-zinc-200'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {menuLink.name}
                    </button>
                  )}
                </Menu.Item>
              </Link>
              }
                
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}