import { DeleteButton, PrimeryButton, Button } from './style'

const Root = () => {
  return (
    <div>
      <h1>Login</h1>
      <h1>Reset</h1>
      <PrimeryButton>Primery </PrimeryButton>
      <DeleteButton> Delete </DeleteButton>
      <hr />
      <Button type="primery" >Primery</Button>
      <Button type='delete'>Delete</Button>
      <Button type='warning'>Warning</Button>
      </div>
  )
}

export default Root