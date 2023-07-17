import { AfterViewInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('search') searchElement: any;
  search: string = '';
  @Input() searchPlaceholder: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  searchSubs: Subscription | undefined;
  constructor() { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    this.startSearch();
  }

  private startSearch(): void {
    // this.searchElement = document.getElementById('search');
    this.searchSubs = fromEvent<any>(this.searchElement.nativeElement, 'input').pipe(
      debounceTime(500),
    ).subscribe(event => {
      this.search = event.target.value;
      if (this.search && this.search.trim()) {
        this.onSearch.emit(this.search);
      }
      if (!this.search) {
        this.onSearch.emit(this.search);
      }
    });
  }


  ngOnDestroy(): void {
    if (this.searchSubs) {
      this.searchSubs.unsubscribe();
    }
  }



}


