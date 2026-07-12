export default function GradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="animate-drift absolute -top-32 left-[8%] h-[420px] w-[420px] rounded-full bg-amber/20 blur-[120px]" />
      <div className="animate-drift-slow absolute top-10 right-[5%] h-[380px] w-[380px] rounded-full bg-judge/15 blur-[130px]" />
      <div className="animate-drift absolute bottom-0 left-[35%] h-[300px] w-[300px] rounded-full bg-bull/10 blur-[110px]" style={{ animationDelay: '3s' }} />
    </div>
  )
}
