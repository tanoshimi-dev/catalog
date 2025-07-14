'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  // AcademicCapIcon,
  CheckCircleIcon,
  // HandRaisedIcon,
  // RocketLaunchIcon,
  // SparklesIcon,
  // SunIcon,
  // UserGroupIcon,
} from '@heroicons/react/20/solid'


const navigation = [
  { name: '企業情報', href: '#' },
  { name: 'サービス', href: '#' },
  { name: '納期・料金', href: '#' },
  { name: 'お知らせ', href: '#' },
]

const team = [
  {
    name: '商品検索サイト',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
    movie: 'Tutorial.mp4',
  },
  {
    name: '発注管理',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
    movie: 'Tutorial2.mp4',
  },
  {
    name: '検診予約',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
    movie: 'Tutorial3.mp4',
  },
  {
    name: '商品カタログ',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
    movie: 'Tutorial4.mp4',
  },
  {
    name: '顧客管理',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
    movie: 'Tutorial5.mp4',
  },
  {
    name: 'マニュアル管理',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
    movie: 'Tutorial6.mp4',
  },
  // More people...
]
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Automation', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Submit ticket', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Terms of service', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'License', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

const testimonials = [
  {
    body: 'いつもありがとうございます！',
    author: {
      name: '事業者様向けWebシステムを構築・導入します 直近実績あり!PHP/Java/React/Vue.js',
      handle: 'bagpacker',
      imageUrl:
        '/assets/images/surprised_female_220822.png',
    },
  },
  {
    body: 'このたびは、システム開発及び運用サポートを丁寧に進めていただきありがとうございました。定期的にミーティングを行い、こちらの要望をしっかりと汲み取ってくださり、安心してお任せすることができました。こちらがうっかり忘れていたような細かい内容までしっかり覚えていてくださり、その姿勢には本当に感動しました。出来上がりにも大変満足しており、また次回もお願いしたいと思っています。 ',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        '/assets/images/happy_male03_220822.png',
    },
  },
  {
    body: 'スムーズなやり取りでした。',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        '/assets/images/male_doctor_220822.png',
    },
  },
  {
    body: '細やかなコミュニーケーションを頂き、安心してやり取りが出来ました。ありがとうございました。',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        '/assets/images/male_talking_220822.png',
    },
  },
  {
    body: '検証環境を準備するにあたって実際のAWSの画面を見てもらいながら的確なアドバイスを貰えた。',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        '/assets/images/teen_male_220822.png',
    },
  },
  {
    body: '独学でやるよりもこの1時間で理解度がグッと上がりました。',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        '/assets/images/happy_male02_220822.png',
    },
  },    

  
]


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-slate-200">
      {/* Header */}
      <header className="absolute bg-indigo-200 inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/assets/images/logo_only_mono.png"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-indigo-800 hover:text-indigo-500">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-indigo-800 hover:text-indigo-500">
              お問合せ <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                  >
                    お問合せ
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

 
      <main className="relative isolate">
        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          {/* 
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-1108/632 w-277 flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          /> 
          */}
        </div>

        <div className="relative isolate overflow-hidden bg-indigo-50 py-24 sm:pt-24 sm:pb-18">
          {/* <img
            alt=""
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
            className="absolute inset-0 -z-10 size-full object-cover"
          /> */}
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-48 sm:-left-40 lg:-bottom-24 lg:left-8 xl:-left-10"
            >
              {/* <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              /> */}
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              {/* <h2 className="text-base/8 font-semibold text-indigo-400">たのしみdev</h2> */}
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-indigo-800 sm:text-3xl">
                あなたのビジネスをITで支援します！
              </p>
              <p className="mt-6 text-lg/8 text-indigo-800">
                事業者様向け業務システム、店舗様向け店舗アプリなど、様々な業務システムを構築・導入します。
              </p>
            </div>
            <dl className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 text-gray-600 sm:mt-12 sm:grid-cols-2 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <div className="bg-orange-400 flex flex-col gap-y-3 border-l border-white/10 p-4 rounded-lg">
                  <dt className="text-white font-bold">Webシステムの開発</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight">Web</dd>
                </div>
                <div className="bg-lime-200 flex flex-col gap-y-3 border-l border-white/10 p-4 rounded-lg">
                  <dt className="text-white font-bold">スマホアプリの開発</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight">Mobile</dd>
                </div>
                <div className="bg-blue-300 flex flex-col gap-y-3 border-l border-white/10 p-4 rounded-lg">
                  <dt className="text-white font-bold">クラウドシステムの保守</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight">Infra</dd>
                </div>
                <div className="bg-purple-400 flex flex-col gap-y-3 border-l border-white/10 p-4 rounded-lg">
                  <dt className="text-white font-bold">その他のご要望</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight">Others</dd>
                </div>
            </dl>
          </div>
          
        </div>


    <div className="bg-white py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-4xl text-gray-600">お客様の声</h2>
          {/* <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            こんな声をいただいています
          </p> */}
        </div>
        <div className="mx-auto mt-8 flow-root max-w-2xl sm:mt-8 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-3 sm:columns-3 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="sketch-border pt-8 sm:inline-block sm:w-full sm:px-2">
                <figure className="rounded-2xl p-2 text-sm/6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-3">
                    <img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

        {/* Team section */}
        <div className="mx-auto mt-2 max-w-7xl px-6 sm:mt-8 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">システム</h2>
            <p className="mt-2 text-lg/8 text-gray-300">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
          >
            {team.map((person) => (
              <li key={person.name}>
                <video src={`/assets/video/${person.movie}`} playsInline autoPlay controls muted className="aspect-14/13 w-full rounded-2xl object-cover" />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-white">{person.name}</h3>
                <p className="text-base/7 text-gray-300">{person.role}</p>
                <p className="text-sm/6 text-gray-500">{person.location}</p>
              </li>
            ))}
          </ul>
        </div>




        {/* CTA section */}
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              {/* <img
                alt=""
                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              /> */}
              <div className="w-full flex-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Join our team
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
                  in accusamus quisquam.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <a href="#" className="text-sm/6 font-semibold text-indigo-400">
                    See our job postings <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-8 lg:px-8 lg:pt-40">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              {/* <img
                alt="Company name"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-9"
              /> */}
              <p className="text-sm/6 text-balance text-gray-300">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="flex gap-x-6">
                {footerNavigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-sm/6 text-gray-400">&copy; 2024 Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// const stats = [
//   { id: 1, name: 'Creators on the platform', value: '8,000+' },
//   { id: 2, name: 'Flat platform fee', value: '3%' },
//   { id: 3, name: 'Uptime guarantee', value: '99.9%' },
//   { id: 4, name: 'Paid out to creators', value: '$70M' },
// ]