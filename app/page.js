
export default function Home() {
  let name = 'park';
  const naver = " http://naver.com"
  return (
    <div>
      <div className="navbar">
        <Link href="/">홈</Link>
        <Link href="/list">List</Link>
      </div>
      <h3 className="title">애플 후레시</h3>
      <p className="title-sub">by dev</p>
    </div>
  )
}
