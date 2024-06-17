import { useForm } from 'react-hook-form'
import './styles/global.css'
import { useState } from 'react'

/*
  [] Validação / Transformação
  [] Field Arrays
  [] Upload de Arquivos
  [] Composition Pattern
*/

const App = () => {
  const [output, setOutput] = useState('')
  const { register, handleSubmit } = useForm()

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main className="h-screen bg-zinc-50 flex flex-col gap-10 items-center justify-center">
      <form
        className='flex flex-col gap-4 w-full max-w-xs'
        onSubmit={handleSubmit(createUser)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className='border border-zinc-200 shadow-sm rounded h-10 px-3'
            {...register('email')}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Senha</label>
          <input
            type="password"
            className='border border-zinc-200 shadow-sm rounded h-10 px-3'
            {...register('password')}
          />
        </div>

        <button
          type="submit"
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
        >
          Salvar
        </button>
      </form>

      <pre>{output}</pre>
    </main>
  )
}

export default App