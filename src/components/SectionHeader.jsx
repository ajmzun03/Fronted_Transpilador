export function SectionHeader({ icon: Icon, title, description, badge }) {
  return (
    <div className="mb-10">
      {badge ? (
        <div className="mb-6 inline-flex items-center rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-600">
          {badge}
        </div>
      ) : null}
      <div className="flex items-center gap-3">
        {Icon ? <Icon className="h-10 w-10 text-brand-500" /> : null}
        <h1 className="text-5xl font-medium tracking-tight text-slate-900">{title}</h1>
      </div>
      {description ? <p className="mt-4 max-w-4xl text-xl leading-9 text-slate-600">{description}</p> : null}
    </div>
  )
}
