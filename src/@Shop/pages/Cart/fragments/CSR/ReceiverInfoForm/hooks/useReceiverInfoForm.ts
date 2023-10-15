import { REGEX } from '@/src/const/regexp'
import Yup from '@/src/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

export const useReceiverInfoForm = () => {
	const methodForm = useForm({
		defaultValues: {
			name: '',
			address: '',
			phone: '',
			note: ''
		},
		mode: 'onTouched',
		resolver: yupResolver(
			Yup.object({
				name: Yup.string().required().min(2),
				address: Yup.string().required(),
				phone: Yup.string().matches(REGEX.PHONE, 'Số điện thoại không hợp lệ!'),
				note: Yup.string()
			})
		)
	})

	const onSubmit = methodForm.handleSubmit(async data => {})

	return { onSubmit, methodForm }
}
