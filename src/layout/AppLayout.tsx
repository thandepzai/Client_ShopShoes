import React, { ReactNode } from 'react'
import Header from './Header'
import AppFooter from './AppFooter'
import { useYupDefaultMessage } from '../helper/Yup'

type Props = {
	children: ReactNode
}
export const AppLayout: React.FC<Props> = ({ children }) => {
	useYupDefaultMessage()
	// const { isLoading } = useLoading();

	// const [messageApi, contextHolder] = message.useMessage();

	// useEffect(() => {
	//   if (isLoading === true) {
	//     return messageApi.open({
	//       key: "loadingmsg",
	//       type: "loading",
	//       content: "Vui lòng chờ...",
	//     });
	//   } else {
	//     return messageApi.destroy("loadingmsg");
	//   }
	// }, [isLoading]);

	return (
		<div className="flex flex-col min-h-[100vh]">
			<Header />
			<main className="flex-grow md:mt-20">{children}</main>
			<AppFooter />
		</div>
	)
}
