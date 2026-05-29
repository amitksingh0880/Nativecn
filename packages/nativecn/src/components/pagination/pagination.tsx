import React from 'react';
import { View, type ViewProps } from 'react-native';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react-native';
import { cn } from '../../lib/utils';
import { Button, type ButtonProps } from '../button';
import { Text } from '../typography';

export const Pagination = ({ className, ...props }: ViewProps) => (
  <View
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center flex-row', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

export const PaginationContent = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  )
);
PaginationContent.displayName = 'PaginationContent';

export const PaginationItem = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => <View ref={ref} className={cn('', className)} {...props} />
);
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & ButtonProps;

export const PaginationLink = ({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) => (
  <Button
    aria-current={isActive ? 'page' : undefined}
    variant={isActive ? 'outline' : 'ghost'}
    size={size}
    className={cn('w-9 h-9', className)}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

export const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn('gap-1 pl-2.5', className)} {...props}>
    <View className="flex flex-row items-center gap-1">
      <ChevronLeft size={16} className="text-foreground" />
      <Text className="text-sm font-medium">Previous</Text>
    </View>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

export const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn('gap-1 pr-2.5', className)} {...props}>
    <View className="flex flex-row items-center gap-1">
      <Text className="text-sm font-medium">Next</Text>
      <ChevronRight size={16} className="text-foreground" />
    </View>
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

export const PaginationEllipsis = ({ className, ...props }: ViewProps) => (
  <View aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
    <MoreHorizontal size={16} className="text-foreground" />
  </View>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';
