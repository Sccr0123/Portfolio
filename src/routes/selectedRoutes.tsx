import { useAppSelector } from '../redux/hooks';

const selectedRoutes = ({
	all,
	client,
}: {
	all: React.ReactNode;
	client: React.ReactNode;
}) => {
	const selectedId = useAppSelector((state) => state.clientInfo.selectedId);
	if (selectedId === -1) {
		return all;
	}
	return client;
};
export default selectedRoutes;
