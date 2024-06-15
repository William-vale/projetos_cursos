import { useRouter } from 'next/router';

export default function Produto() {
    const route = useRouter();

    const { id } = route.query
    return (
        <div>Produto {id}</div>
    )
}