import Yup from '@/src/helper/Yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface FormProps {
	search: string
}

export const useSearchBox = () => {
	const methodForm = useForm<FormProps>({
		defaultValues: {
			search: ''
		},
		mode: 'onTouched',
		resolver: yupResolver(
			Yup.object({
				search: Yup.string().required()
			})
		)
	})

	const onSubmit = methodForm.handleSubmit((data: FormProps) => {
		console.log(data)
	})

	return {
		methodForm,
		onSubmit
	}
}
