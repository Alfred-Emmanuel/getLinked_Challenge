

export default async function getCategories() {
    const res = await fetch(
      "https://backend.getlinked.ai/hackathon/categories-list"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    const categories = res.json();
    return categories;
}