import Card from './Card/card'
import { projects } from '../../config/projects'

export default function Cards({ query }: { query: string }) {
  const filteredProjects = projects.filter((project) => {
    // Replace 'category' with the property in your 'projects' array that represents the category
    return query === 'All' || project.category === query
  })

  return (
    <div className='flex flex-row flex-wrap gap-8 lg:gap-12 justify-center mx-auto'>
      {filteredProjects.map((project) => (
        <Card detail={project} key={project.id}/>
      ))}
    </div>
  )
}
