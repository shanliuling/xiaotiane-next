'use client' // 告诉 next.js 这是一个客户端组件,这样才能使用 useRouter 这些客户端端环境中使用的api
// 服务器组件:

// 服务器组件在服务器上渲染，主要用于获取数据和提高初始加载速度。
// 不能使用任何与 DOM 相关的 Hook（如 useState、useEffect、useRef）。
// 不能使用客户端渲染的 API（如 useRouter）。
// 客户端组件:

// 客户端组件在客户端渲染，主要用于处理用户交互。
// 可以使用所有的客户端 Hook 和 API（如 useState、useEffect、useRouter）。

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './styles.module.css'
export default function Dashboard() {
  const router = useRouter()
  const jumt = () => {
    router.push('/list/3')
  }
  return (
    <>
      <h2 className={styles.dashboard}>dashboard page</h2>
      <ul>
        <li>
          <Link href="/list/1" className="underline m-20 text-blue-500">
            列表项1
          </Link>
        </li>
        <li>
          <Link href="/list/2">列表项2</Link>
        </li>
        <button onClick={jumt}>列表项3</button>
        <button className="btn btn-primary" onClick={jumt}>
          列表项4
        </button>
      </ul>
    </>
  )
}
