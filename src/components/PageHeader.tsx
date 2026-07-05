type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="font-serif text-4xl font-medium text-text sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
        )}
      </div>
    </section>
  );
}
