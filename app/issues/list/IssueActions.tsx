import { Button,Flex } from "@radix-ui/themes";
import Link from "next/link";

import React from 'react'
import IssueStatusfilter from "./IssueStatusfilter";

const IssueActions = () => {
  return (
    <Flex justify="between">
        <IssueStatusfilter/>
        <Button>
            <Link href="/issues/new">New Issue</Link>
        </Button>
    </Flex>
  )
}

export default IssueActions