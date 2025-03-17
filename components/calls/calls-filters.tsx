"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, Filter, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function CallsFilters() {
  const [date, setDate] = useState<Date>()
  const [scoreRange, setScoreRange] = useState([0, 100])
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search calls, customers, or reps..." className="w-full pl-8 md:w-[300px]" />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Filter by date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setDate(date)
                if (date) {
                  addFilter(`Date: ${format(date, "PP")}`)
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Select
          onValueChange={(value) => {
            if (value !== "all") {
              addFilter(`Rep: ${value}`)
            }
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by rep" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Reps</SelectItem>
            <SelectItem value="Tanaka Hiroshi">Tanaka Hiroshi</SelectItem>
            <SelectItem value="Suzuki Yuki">Suzuki Yuki</SelectItem>
            <SelectItem value="Watanabe Kenji">Watanabe Kenji</SelectItem>
            <SelectItem value="Sato Akira">Sato Akira</SelectItem>
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Score Range
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4 p-2">
              <h4 className="font-medium">Call Score Range</h4>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                value={scoreRange}
                onValueChange={(value) => {
                  setScoreRange(value)
                  addFilter(`Score: ${value[0]}-${value[1]}`)
                }}
              />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">{scoreRange[0]}</span>
                <span className="text-sm text-muted-foreground">{scoreRange[1]}</span>
              </div>
              <Button className="w-full" onClick={() => addFilter(`Score: ${scoreRange[0]}-${scoreRange[1]}`)}>
                Apply Filter
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="flex items-center gap-1">
              {filter}
              <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter(filter)} />
            </Badge>
          ))}
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={() => setActiveFilters([])}>
            Clear all
          </Button>
        </div>
      )}
    </div>
  )
}

