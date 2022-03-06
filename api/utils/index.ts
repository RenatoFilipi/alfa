interface IProject {
  id: number
  name: string
  link: string
  file: string
}

const list: Array<IProject> = [
  {
    id: 1,
    link: '/',
    name: 'Projeto AA',
    file: 'test1.jpg',
  },
  {
    id: 1,
    link: '/',
    name: 'Projeto BB',
    file: 'test2.jpg',
  },
  {
    id: 1,
    link: '/',
    name: 'Projeto CC',
    file: 'test3.jpg',
  },
  {
    id: 1,
    link: '/',
    name: 'Projeto DD',
    file: 'test4.jpg',
  },
]
export default list
