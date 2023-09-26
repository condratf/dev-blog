import { FC } from 'react'
// local
import { ArrayElement } from '@/utils'
import { fetcher } from '@/lib'
import { STRAPI_URL } from '@/consts'
//styles
import styles from './styles.module.scss'

export const AuthForm: FC = () => {
  async function create(formData: FormData) {
    'use server'
    const [email, password] = [formData.get('email'), formData.get('password')]

    const data = await fetcher(`${STRAPI_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })

    console.log({data})

    // mutate data
    // revalidate cache
    // revalidatePath(routes)
  }

  const pageValues = {
    heading: 'Contact us',
    inputs: [
      { name: 'email', type: 'email', placeholder: 'email', required: true },
      { name: 'password', type: 'password', placeholder: 'password', required: true },
      { name: 'send', type: 'submit', placeholder: 'Send' }
    ]
  } as const;

  type RenderInputParams = {
    name: string,
    type: ArrayElement<typeof pageValues.inputs>['type'],
    placeholder: string,
    required?: boolean
  }

  const renderInput = ({ name, type, placeholder, required }: RenderInputParams) => (
    (type === 'email') && (
      <label htmlFor={name}>
        <span>{placeholder}</span>
        <input
          id={name}
          required={required}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </label>
    ) || (type === 'password') && (
      <label htmlFor={name}>
        <span>{placeholder}</span>
        <input
          type={type}
          id={name}
          required={required}
          name={name}
          placeholder={placeholder}
        />
      </label>
    ) || (type === 'submit') && (
      <button type={type}>{placeholder}</button>
    )
  )

  return (
    <div className={styles.container}>

      <form className={styles.contactForm} action={create}>
        <h2>{pageValues.heading}</h2>

        {
          pageValues
            .inputs
            .map(renderInput)
        }
        
      </form>

    </div>
  )
}
