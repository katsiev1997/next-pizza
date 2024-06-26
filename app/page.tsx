import { Container, Filters, Title } from "@/components/shared";
import { TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductGroupList } from "@/components/shared/product-group-list";

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 7,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 8,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                ]}
              />
              <ProductGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 7,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                  {
                    id: 8,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 100,
                    items: [{ price: 20 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
