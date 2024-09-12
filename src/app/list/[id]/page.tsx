export default function ListPage({ params }: any) {
  return (
    <>
      <h2>ListPage:{JSON.stringify(params)}</h2>
      <h3>ListPage:{params.id}</h3>
    </>
  )
}
