import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/lib/company";

export function ProductOverview() {
  return (
    <section className="section-shell bg-stone-100">
      <div className="container-shell">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Products</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
            Precision component categories for diverse industrial demands
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {productCategories.map((product) => (
            <article
              key={product.slug}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-3 text-slate-600">{product.description}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600"
                >
                  View details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
