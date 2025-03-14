export default function NotFound() {
  return (
    <div className="container flex min-h-[400px] flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Category Not Found</h2>
      <p className="mt-2 text-muted-foreground">
        The category you're looking for doesn't exist.
      </p>
    </div>
  )
}