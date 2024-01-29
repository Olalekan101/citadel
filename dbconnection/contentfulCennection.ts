export const revalidate = 60;
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

type entryType = {
  entryValue: object;
};

export async function ContenfulProduct() {
  const res = await client
    .getEntries({ content_type: "tTcitadelWebsiteContent" })
    .then((entry: entryType) => {
      return entry;
    });
  const data = res.items.map((value: { fields: any }) => {
    return value.fields;
  });

  const Id = res.items.map((item: any, index: number) => {
    const entryId = item.sys.id;
    return entryId;
  });

  console.log(JSON.stringify(res, null, 2), "opopopopoppopoop");

  const modifiedProducts = data.map((product: any, index: number) => ({
    ...product,
    productId: Id[index],
    heroImage: "https:" + product.heroImage.fields.file.url,
  }));

  return modifiedProducts;
}
// export async function ContenfulSingleProduct(entryId: any) {
//   try {
//     const entry = await client.getEntry(entryId);
//     // const data = entry.map((value: { fields: any }) => {
//     //   return value.fields;
//     // });
//     // const modifiedProducts = data.map((product: any, index: number) => ({
//     //   ...product,
//     //   featuredImage: "https:" + product.featuredImage.fields.file.url,
//     //   productPictures: product.productPictures.map(
//     //     (picture: any) => picture.fields.file.url
//     //   ),
//     // }));
//     // console.log(data, "podsjsrjbnjn");
//     const product = entry.fields;

//     const items = {
//       ...product,
//       featuredImage: "https:" + product.featuredImage.fields.file.url,
//       productPictures: product.productPictures.map(
//         (picture: any) => picture.fields.file.url
//       ),
//     };

//     return items;
//   } catch (error) {
//     console.error("Error fetching entry:", error);
//     return null; // Or handle the error in a way that makes sense for your application
//   }
// }
