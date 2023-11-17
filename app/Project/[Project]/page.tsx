import React from 'react'
import { useRouter } from 'next/router'
const page = ({
    params,
}: {
    params: {Project: string};
}) => {
    
  return (
    <div>Project {params.Project}</div>
  )
}

export default page