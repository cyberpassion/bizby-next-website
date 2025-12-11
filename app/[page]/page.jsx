export default async function Page({ params }) {
	const { page } = await params;
	return <div>My Post: {page}</div>;
}
