"use client"
import { motion, Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

interface AccordionItemProps {
  title: string
  content: string
  isExpanded: boolean
  onToggle: () => void
}

interface AccordionProps {
  items: Array<{
    title: string
    content: string
  }>
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isExpanded,
  onToggle,
}) => {
  const cardVariants: Variants = {
    collapsed: {
      height: '60px',
      transition: { type: 'spring', stiffness: 300, damping: 15 },
    },
    expanded: {
      height: 'auto',
      transition: { type: 'spring', stiffness: 300, damping: 15 },
    },
  }

  const contentVariants: Variants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  }

  const chevronVariants: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  }

  return (
    <motion.div
      className={`w-full my-4 h-full cursor-pointer select-none overflow-hidden border-b-2`}
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-4 text-customBlack">
        <h2 className="m-0 text-sm font-semibold text-red-500">{title}</h2>
        <motion.div variants={chevronVariants}>
          <ChevronDown size={18} color='#353535'/>
        </motion.div>
      </div>
      <motion.div
        className="text-md select-none px-4 py-4"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? 'expanded' : 'collapsed'}
      >
        <p className="m-0 text-sm text-customBlack">
          {content}
        </p>
      </motion.div>
    </motion.div>
  )
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

export default Accordion;