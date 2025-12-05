import Image from "next/image";
import {
  Bell,
  HelpCircle,
  Search,
  Users,
  UserPlus,
  DollarSign,
  Monitor,
  TrendingUp,
  TrendingDown,
  Clock,
  Download,
  Plus
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Основное содержимое */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Верхняя панель навигации */}
        <header className="flex items-center justify-between sticky top-0 bg-background-light/80 backdrop-blur-sm z-10 border-b border-gray-200 px-6 h-16 py-6">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-bold text-gray-900">
              Панель управления
            </h2>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4">
            <label className="relative grow max-w-sm">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={20} strokeWidth={2} />
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="Поиск..."
                type="search"
              />
            </label>
            <button className="relative p-2 rounded-full hover:bg-gray-200">
              <span className="text-gray-600">
                <Bell size={22} strokeWidth={2} />
              </span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <span className="text-gray-600">
                <HelpCircle size={22} strokeWidth={2} />
              </span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              data-alt="Аватар пользователя"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsEho40RnWTUmu6pMpO6DupWNxMrym5DKo3g419KmhNAQtLqJ7aFyhYI_4CcOeoVvnXcKaWCqxr29_48-lyDS709-XESoSTX8_sEwHCHetkO83508qKQ3Eeddrs6ZtRo56WBE27GhmCjL12wLoj-bPyAncFq1qKHPQpuKk8t0EJgEHUVmvYwQ9QEQDqLmTIqy4A-nJhAt9anBuppvkOwtCWGPmQJmiwX7wtc8VdvEKz-qpzI64daOgb82to3Um69z_wCzAYwgynvQ")',
              }}
            />
          </div>
        </header>
        {/* Контент страницы */}
        <div className="p-6 space-y-6">
          {/* Хлебные крошки */}
          <div className="flex items-center gap-2">
            <a
              className="text-gray-500 hover:text-primary text-sm font-medium"
              href="#"
            >
              Главная
            </a>
            <span className="text-gray-400 text-sm">/</span>
            <span className="text-gray-800 text-sm font-medium">
              Панель управления
            </span>
          </div>
          {/* Статистика */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm font-medium">
                  Всего пользователей
                </p>
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Users className="text-primary" size={20} strokeWidth={2} />
                </div>
              </div>
              <p className="text-gray-900 tracking-tight text-3xl font-bold">
                12,402
              </p>
              <p className="text-green-500 text-sm font-medium flex items-center gap-1">
                <TrendingUp size={16} className="" />
                +5.2%
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm font-medium">
                  Новые регистрации
                </p>
                <div className="p-2 bg-primary/20 rounded-lg">
                  <UserPlus className="text-primary" size={20} strokeWidth={2} />
                </div>
              </div>
              <p className="text-gray-900 tracking-tight text-3xl font-bold">
                356
              </p>
              <p className="text-green-500 text-sm font-medium flex items-center gap-1">
                <TrendingUp size={16} className="" />
                +12.1%
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm font-medium">
                  Доход
                </p>
                <div className="p-2 bg-primary/20 rounded-lg">
                  <DollarSign className="text-primary" size={20} strokeWidth={2} />
                </div>
              </div>
              <p className="text-gray-900 tracking-tight text-3xl font-bold">
                $24,890
              </p>
              <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                <TrendingDown size={16} className="" />
                -1.5%
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm font-medium">
                  Сейчас активно
                </p>
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Monitor className="text-primary" size={20} strokeWidth={2} />
                </div>
              </div>
              <p className="text-gray-900 tracking-tight text-3xl font-bold">
                189
              </p>
              <p className="text-gray-500 text-sm font-medium flex items-center gap-1">
                <Clock size={16} className="" />
                В реальном времени
              </p>
            </div>
          </div>
          {/* Графики */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-4 rounded-xl border border-gray-200 p-6 bg-white">
              <p className="text-gray-900 text-lg font-semibold">
                Рост пользователей со временем
              </p>
              <div className="flex min-h-[300px] flex-1 flex-col gap-8 py-4">
                <svg
                  fill="none"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 540 250"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 249V250H540V249H0Z"
                    stroke="#e5e7eb"
                  />
                  <path
                    d="M0 187V188H540V187H0Z"
                    stroke="#e5e7eb"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M0 125V126H540V125H0Z"
                    stroke="#e5e7eb"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M0 63V64H540V63H0Z"
                    stroke="#e5e7eb"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M0 1V2H540V1H0Z"
                    stroke="#e5e7eb"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M25 180C42.5 180 42.5 80 60 80C77.5 80 77.5 100 95 100C112.5 100 112.5 150 130 150C147.5 150 147.5 90 165 90C182.5 90 182.5 160 200 160C217.5 160 217.5 120 235 120C252.5 120 252.5 100 270 100C287.5 100 287.5 190 305 190C322.5 190 322.5 220 340 220C357.5 220 357.5 40 375 40C392.5 40 392.5 140 410 140C427.5 140 427.5 200 445 200C462.5 200 462.5 80 480 80C497.5 80 497.5 20 515 20"
                    stroke="url(#paint0_linear_chart)"
                    strokeLinecap="round"
                    strokeWidth={3}
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_chart"
                      x1={270}
                      x2={270}
                      y1={20}
                      y2={220}
                    >
                      <stop stopColor="#137fec" />
                      <stop offset={1} stopColor="#50E3C2" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-around">
                  <p className="text-gray-500 text-xs font-bold tracking-wide">
                    ЯНВ
                  </p>
                  <p className="text-gray-500 text-xs font-bold tracking-wide">
                    ФЕВ
                  </p>
                  <p className="text-gray-500 text-xs font-bold tracking-wide">
                    МАРТ
                  </p>
                  <p className="text-gray-500 text-xs font-bold tracking-wide">
                    АПР
                  </p>
                  <p className="text-gray-500 text-xs font-bold tracking-wide">
                    МАЙ
                  </p>
                  <p className="text-gray-500 text-xs font-bold tracking-wide">
                    ИЮНЬ
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 p-6 bg-white">
              <p className="text-gray-900 text-lg font-semibold">
                Демография пользователей
              </p>
              <div className="flex-1 flex items-center justify-center min-h-[300px]">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      className="stroke-current text-gray-200"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeWidth={3}
                    />
                    <path
                      className="stroke-current text-primary"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeDasharray="60, 100"
                      strokeLinecap="round"
                      strokeWidth={3}
                    />
                    <path
                      className="stroke-current text-green-400"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeDasharray="25, 100"
                      strokeDashoffset={-60}
                      strokeLinecap="round"
                      strokeWidth={3}
                    />
                    <path
                      className="stroke-current text-orange-400"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeDasharray="15, 100"
                      strokeDashoffset={-85}
                      strokeLinecap="round"
                      strokeWidth={3}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      12к
                    </span>
                    <span className="text-xs text-gray-500">Всего пользователей</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span>США (60%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span>ЕС (25%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  <span>Другое (15%)</span>
                </div>
              </div>
            </div>
          </div>
          {/* Таблица данных */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Последние пользователи
              </h3>
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Download size={16} /> Экспорт
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary/90">
                  <Plus size={16} />
                  Добавить пользователя
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="p-4" scope="col">
                      <input
                        className="rounded border-gray-300 text-primary focus:ring-primary/50"
                        type="checkbox"
                      />
                    </th>
                    <th className="px-6 py-3" scope="col">
                      Имя
                    </th>
                    <th className="px-6 py-3" scope="col">
                      Роль
                    </th>
                    <th className="px-6 py-3" scope="col">
                      Статус
                    </th>
                    <th className="px-6 py-3" scope="col">
                      Дата регистрации
                    </th>
                    <th className="px-6 py-3" scope="col">
                      <span className="sr-only">Действия</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                      <input
                        className="rounded border-gray-300 text-primary focus:ring-primary/50"
                        type="checkbox"
                      />
                    </td>
                    <th
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                      scope="row"
                    >
                      <Image
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Аватар пользователя"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH75X0aWUtJR-B5XE9BNSBtJqS24dnQnTSSVDUSwLSbeSyW3r0f-kj9ZYTcnFWRsHD8XkiVblfrxt_NiM0LY2XoCsCr1sZqeeavXHW6w54Y5FwdEDav6iUJHEBOQ_xVDgUMgV5is_QsRV2UNt9JvU3hDhPCocglWr2Yx7fAATa0Tnh3aqkcGMqC0ikRWf94IRHcV8LpAOxZyafyC8Lh-7oNliqczZinWXb1UqbRz5TBKxGyojxN4kHVKBJ5f6fcxluAOxxEgclvfE"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">Нил Симс</div>
                        <div className="font-normal text-gray-500">
                          neil.sims@example.com
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">Администратор</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Активен
                      </span>
                    </td>
                    <td className="px-6 py-4">2023-08-15</td>
                    <td className="px-6 py-4 text-right">
                      <button className="font-medium text-primary hover:underline">
                        Изменить
                      </button>
                      <button className="font-medium text-red-500 hover:underline ml-4">
                        Удалить
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                      <input
                        className="rounded border-gray-300 text-primary focus:ring-primary/50"
                        type="checkbox"
                      />
                    </td>
                    <th
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                      scope="row"
                    >
                      <Image
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Аватар пользователя"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFSp-rS2QoZoOZfyku2NXr4Arrott-BaGjGizY2PYWr14nsNWEI2IQMncBZJqeAF8Wn7Wro2RHwRFFXhcAc6CFIaSBQQxEnb5ejD1AkVl80n5WWneRNKrzS_YubEC-7LJWj27rcB1WKgNjQfu5Xhvz0eBPmpf-0EYn7133GWSWltGAHtirK-ar9deXkRyxpHP3NLsO_uhq4KVFwi6qk3QGRJ0vAbtARZCxqKRLBsIj-SQw1OE5KdKSGnxegC75eQLQH6QOwsZJDjE"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">Джон Доу</div>
                        <div className="font-normal text-gray-500">
                          john.doe@example.com
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">Редактор</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Активен
                      </span>
                    </td>
                    <td className="px-6 py-4">2023-07-21</td>
                    <td className="px-6 py-4 text-right">
                      <button className="font-medium text-primary hover:underline">
                        Изменить
                      </button>
                      <button className="font-medium text-red-500 hover:underline ml-4">
                        Удалить
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                      <input
                        className="rounded border-gray-300 text-primary focus:ring-primary/50"
                        type="checkbox"
                      />
                    </td>
                    <th
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                      scope="row"
                    >
                      <Image
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Аватар пользователя"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgJhf9Y-ILHOmifN62BsrbZHHkfKxmoAJK1jjvaxNI9LMW85C4E1RjGNiYytwUgppKhCObo29uAlP0T3zjNITOebxoGZtvytpTw6z5kUdl7Vo7JnlMHS0P3BNAK9wx11LmOZQEWuZF33qJ8kIHcuL9kyeWoBGT4L8qNj8PO-6T6RrapFvlos2CCMH-tfZgRFVtKSgrxAr--JIM0k_hjAB5wPbvBK6Z4PvhPRdOVUwRRsObnBkZfzs7q2uvIJuPM1Cpbob70BmP9mw"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          Джейн Смит
                        </div>
                        <div className="font-normal text-gray-500">
                          jane.smith@example.com
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">Просмотр</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Неактивен
                      </span>
                    </td>
                    <td className="px-6 py-4">2023-06-01</td>
                    <td className="px-6 py-4 text-right">
                      <button className="font-medium text-primary hover:underline">
                        Изменить
                      </button>
                      <button className="font-medium text-red-500 hover:underline ml-4">
                        Удалить
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-sm text-gray-700">
                Показаны{" "}
                <span className="font-semibold text-gray-900">
                  1-3
                </span>{" "}
                из{" "}
                <span className="font-semibold text-gray-900">
                  100
                </span>
              </span>
              <div className="inline-flex -space-x-px rounded-md text-sm">
                <a
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  Предыдущая
                </a>
                <a
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  Следующая
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
