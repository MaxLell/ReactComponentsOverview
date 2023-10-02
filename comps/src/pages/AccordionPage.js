import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'kjhadkjh',
      label: 'One',
      content: '11111 11111 11111 11111 11111 11111',
    },
    {
      id: 'lkdjw',
      label: 'Two',
      content: '22222 22222 22222 22222 22222 22222',
    },
    {
      id: 'uzqwekj',
      label: 'Three',
      content: '33333 33333 33333 33333 33333 33333',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
