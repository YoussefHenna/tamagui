import { SandboxHeading, Stack } from 'sandbox-ui'

export default CodeExamplesInput = (props) => (
  <Stack px="$2" w={550} $gtSm={{ px: '$6' }}>
    <SandboxHeading size={props.big ? 'large' : 'small'}>
      Lorem ipsum dolor.
    </SandboxHeading>
  </Stack>
)
