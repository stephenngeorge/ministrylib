import React from 'react'

import { Column, Container, Title } from './lib'

export default () => (
    <Container backgroundColor="dark-grey" full_width={false}>
        <Column>
            <Title headingText="Test" headingLevel={1} />
            <Title headingText="Subtitle" headingLevel={3} />
        </Column>
    </Container>
)